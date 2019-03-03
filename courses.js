/**
 * @api {get} /api/courses-list Получить список курсов
 * @apiName GetCoursesList
 * @apiGroup Courses
 *
 * @apiSuccess {Object[]} courses Список курсов
 * @apiSuccess {String} courses.id ID курса
 * @apiSuccess {String} courses.url url репозитория
 * @apiSuccess {String} courses.name название курса
 */

/**
 * @api {get} /api/course/:url Получить структуру конкретного курса
 * @apiName GetCourse
 * @apiGroup Courses
 *
 * @apiParam {String} url url репозитория
 *
 * @apiSuccess {Object} course структура запрошенного курса
 * @apiSuccess {String} course.token токен для работы с определенным курсом
 * @apiSuccess {Object[]} course.items плоский массив сущностей
 * @apiSuccess {String} course.items.id ID сущности должен быть абсолютным
 * ("https://crmm.ru/xapi/courses/sb_spp/a7ig7mpdb"), если у нее есть дети, и относительным
 * ("/a7ig7mpdb"), если это листок
 * @apiSuccess {String[]} course.items.items массив ID дочерних сущностей
 * @apiSuccess {Object} course.structureDoc содержимое файла /src/structure/structureDoc.json
 */

/**
 * @api {post} /api/close-course Закрыть курс
 * @apiName CloseCourse
 * @apiGroup Courses
 * 
 * @apiParam {String} token токен, использовавшийся для работы с этим курсом
 * 
 * @apiSuccess {Boolean} result true, если успешно
 *
 * @apiUse WrongToken
 */