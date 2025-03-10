<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); //adicionar esse no backend, apenas para testes locais
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

$req = $_SERVER['REQUEST_METHOD'];


try {
    $conn = new PDO("pgsql:host=127.0.0.1;port=5432;dbname=postgres", "postgres", "mysecretpassword");
} catch (PDOException $e) {
    $e->getMessage();
}



switch ($req) {
    case 'GET':
        if ($_REQUEST['campo']) {
            $campo = $_REQUEST['campo'];
        } else {
            $campo = '';
        }
        if ($_REQUEST['ordem']) {
            $ordem = $_REQUEST['ordem'];
        } else {
            $ordem = '';
        }

        $sql_select = "SELECT * FROM dados";
        if ($campo == "bairro" || $campo == "cidade" || $campo == "estado") {
            $sql_select .= " ORDER BY " . $campo;
            if ($ordem == "ASC" || $ordem == "DESC") {
                $sql_select .= " " . $ordem;
            }
        }
        $smt = $conn->prepare($sql_select);
        $smt->execute();
        $result = $smt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);

        // $data = [[1, 'a', 'b', 'c' ],[2, 'a', 'b', 'c' ]];
        // header('Content-Type: application/json; charset=utf-8');
        // echo json_encode($data);
        break;



    case 'POST':
        $req = $_REQUEST["req"];
        switch ($req) {
            case "ins":

                $_POST = json_decode(file_get_contents("php://input"), true);

                $data = new stdClass();

                $data->cep = $_POST["cep"];
                $data->cidade = $_POST["localidade"];
                $data->bairro = $_POST["bairro"];
                $data->estado = $_POST["estado"];

                $sql_insert = "INSERT INTO dados (cep, cidade, bairro, estado) VALUES(:cep, :cidade, :bairro, :estado)";
                $smt = $conn->prepare($sql_insert);

                $smt->bindValue(":cep", $data->cep);
                $smt->bindValue(":cidade", $data->cidade);
                $smt->bindValue(":bairro", $data->bairro);
                $smt->bindValue(":estado", $data->estado);
                try {
                    $msg = '';
                    $smt->execute();



                    $msg .= "Transferência completa";
                } catch (PDOException $e) {
                    $msg .= "CEP já registrado";
                }
                echo json_encode($msg);


                break;
            case "del";

                $_POST = json_decode(file_get_contents("php://input"), true);


                $sql_delete = "DELETE FROM dados WHERE cep = :cep";
                $smt = $conn->prepare($sql_delete);

                $smt->bindValue(":cep", $_POST);
                try {
                    $msg = '';


                    $smt->execute();
                    $msg .= "Dados deletados";
                } catch (PDOException $e) {
                    $msg .= "Ocorreu um erro :(";
                }
                echo json_encode($msg);




                break;
        }



        break;
    default:


        break;
}
