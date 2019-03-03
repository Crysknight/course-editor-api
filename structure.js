/**
 * @api {post} /api/update-item Обновить сущность
 * @apiName UpdateItem
 * @apiGroup Structure
 * 
 * @apiParam {Object} request объект запроса
 * @apiParam {String} request.token токен определенного курса
 * @apiParam {String} request.id ID сущности
 * @apiParam {Object} request.item обновленная сущность
 * 
 * @apiSuccess {Boolean} result true, если успешно
 *
 * @apiUse WrongToken
 * @apiUse ItemNotFound
 */

/**
 * @api {post} /api/insert-item Вставить новую сущность
 * @apiName InsertItem
 * @apiGroup Structure
 * 
 * @apiParam {Object} request объект запроса
 * @apiParam {String} request.token токен определенного курса
 * @apiParam {String} request.item сущность
 * @apiParam {String} request.parentId ID нового родителя
 * @apiParam {Number} request.index место, куда вставить
 */

/**
 * @api {post} /api/move-item Передвинуть сущность
 * @apiName MoveItem
 * @apiGroup Structure
 * 
 * @apiParam {Object} request объект запроса
 * @apiParam {String} request.token токен определенного курса
 * @apiParam {String} request.id ID сущности
 * @apiParam {String} request.parentId ID нового родителя
 * @apiParam {Number} request.index место, куда вставить
 * 
 * @apiSuccess {Boolean} result true, если успешно
 *
 * @apiUse WrongToken
 * @apiUse ItemNotFound
 */