/**
 * @api {get} /api/export-zip/:token Выгрузить ZIP
 * @apiName ExportZip
 * @apiGroup Services
 * 
 * @apiParam {String} token токен определенного курса
 * 
 * @apiSuccess {File} zip ZIP-архив с готовым курсом
 */

/**
 * @api {get} /api/prepare-preview/:token Подготовить preview курса
 * @apiName PreparePreview
 * @apiGroup Services
 * 
 * @apiParam {String} token токен определенного курса
 * 
 * @apiSuccess {String} link ссылка на подготовленный к просмотру курс
 */