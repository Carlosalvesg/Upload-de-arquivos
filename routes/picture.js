const express = require("express"); // Importa o framework Express
const router = express.Router(); // Cria um arquivo de retos pelo Express

const upload = require("../config/multer"); // Importa a configuração do multer para upload de arquivos
const PictureController = require("../controller/PictureControllers"); // Importa o controlador de imagens

// Rota para criar uma nova imagem
// Usa o middleware do multer para fazer o upload de um único arquivo chamado "file"
router.post("/", upload.single("file"), PictureController.create);

// Exporta o arquivo de rotas
module.exports = router;