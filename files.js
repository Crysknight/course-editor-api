/**
 * @api {post} /api/upload-file Загрузить файл
 * @apiName UploadFile
 * @apiGroup Files
 * 
 * @apiParam {String} token токен определенного курса
 * @apiParam {String} itemId ID сущности, к которой привязан файл
 * @apiParam {String} path путь, по которому необходимо сохранить файл в рабочей папке
 * @apiParam {File} file файл
 * 
 * @apiSuccess {Boolean} result true, если успешно
 *
 * @apiUse WrongToken
 * @apiUse ItemNotFound
 */