define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__projects_course_editor_api_docs_main_js",
    "groupTitle": "C__projects_course_editor_api_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/close-course",
    "title": "Закрыть курс",
    "name": "CloseCourse",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>токен, использовавшийся для работы с этим курсом</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>true, если успешно</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongToken",
            "description": "<p>выгруженного курса с таким токеном не существует</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/course/:url",
    "title": "Получить структуру конкретного курса",
    "name": "GetCourse",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>url репозитория</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>структура запрошенного курса</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course.token",
            "description": "<p>токен для работы с определенным курсом</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "course.items",
            "description": "<p>плоский массив сущностей</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course.items.id",
            "description": "<p>ID сущности должен быть абсолютным (&quot;https://crmm.ru/xapi/courses/sb_spp/a7ig7mpdb&quot;), если у нее есть дети, и относительным (&quot;/a7ig7mpdb&quot;), если это листок</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "course.items.items",
            "description": "<p>массив ID дочерних сущностей</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "course.structureDoc",
            "description": "<p>содержимое файла /src/structure/structureDoc.json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses-list",
    "title": "Получить список курсов",
    "name": "GetCoursesList",
    "group": "Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "courses",
            "description": "<p>Список курсов</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.id",
            "description": "<p>ID курса</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.url",
            "description": "<p>url репозитория</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.name",
            "description": "<p>название курса</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/api/upload-file",
    "title": "Загрузить файл",
    "name": "UploadFile",
    "group": "Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>токен определенного курса</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>ID сущности, к которой привязан файл</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>путь, по которому необходимо сохранить файл в рабочей папке</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>файл</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>true, если успешно</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./files.js",
    "groupTitle": "Files",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongToken",
            "description": "<p>выгруженного курса с таким токеном не существует</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>сущность с таким ID не найдена</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/export-zip/:token",
    "title": "Выгрузить ZIP",
    "name": "ExportZip",
    "group": "Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>токен определенного курса</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "zip",
            "description": "<p>ZIP-архив с готовым курсом</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./services.js",
    "groupTitle": "Services"
  },
  {
    "type": "get",
    "url": "/api/prepare-preview/:token",
    "title": "Подготовить preview курса",
    "name": "PreparePreview",
    "group": "Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>токен определенного курса</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>ссылка на подготовленный к просмотру курс</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./services.js",
    "groupTitle": "Services"
  },
  {
    "type": "post",
    "url": "/api/move-item",
    "title": "Передвинуть сущность",
    "name": "MoveItem",
    "group": "Structure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>объект запроса</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>токен определенного курса</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.id",
            "description": "<p>ID сущности</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.parentId",
            "description": "<p>ID нового родителя</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "request.index",
            "description": "<p>место, куда вставить</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>true, если успешно</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./structure.js",
    "groupTitle": "Structure",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongToken",
            "description": "<p>выгруженного курса с таким токеном не существует</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>сущность с таким ID не найдена</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/update-item",
    "title": "Обновить сущность",
    "name": "UpdateItem",
    "group": "Structure",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>объект запроса</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>токен определенного курса</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.id",
            "description": "<p>ID сущности</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request.item",
            "description": "<p>обновленная сущность</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>true, если успешно</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./structure.js",
    "groupTitle": "Structure",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongToken",
            "description": "<p>выгруженного курса с таким токеном не существует</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>сущность с таким ID не найдена</p>"
          }
        ]
      }
    }
  }
] });
