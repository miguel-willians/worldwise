import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate(); //Funciona como um redirecionamento, mas de forma imperativa.

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1); //Volta para a página anterior
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
