# Setup

Đầu tiên thì chúng ta cần có kiến thức về GraphQL nói chung, xem thêm [tại đây](https://graphql.org/)

Docs setup này sẽ lấy ví dụ của module `theme_template` của repo [app-api](https://github.com/es-hs/app-api)

## Định nghĩa schema của 1 module

Ở mỗi 1 module, trong `modules/theme_template/delivery/graphql` sẽ gồm 3 files:

- **theme_template.graphql:** File tác dụng định nghĩa cấu trúc schema của module hiện tại theo cú pháp chuẩn của GraphQL

  ```graphql
  // theme_template.graphql

  scalar Time

  type ThemeTemplate {
      ID: Int
      Name: String
      PageType: PageType
      ThemeID: Int
      ThemeGlobalStyleID: Int
      TemplateID: Int
      Default: bool
      CreatedAt: Time
      UpdatedAt: Time
  }

  type Edge {
      cursor: String
      node: ThemeTemplate
  }

  type PageInfo {
      endCursor: String
      hasNextPage: Boolean
  }

  type ThemeTemplateResult {
      edges: [Edge]
      pageInfo: PageInfo
      totalCount: Int
  }

  type ThemeTemplateInput {
      ID: Int
      Name: String
      PageType: PageType
      ThemeID: Int
      ThemeGlobalStyleID: Int
      TemplateID: Int
      Default: bool
  }

  type Query {
      themeTemplates(after: String, first: Int, pageType: PageType): ThemeTemplateResult
      themeTemplate(id: Int) ThemeTemplate
      themeTemplatesTrash(after: String, first: Int, pageType: PageType): ThemeTemplateResult
  }

  enum PageType {
      INDEX
      PRODUCT
      COLLECTION
      ARTICLE
      PAGE
  }

  type Mutation {
      themeTemplateCreate(themeTemplate: ThemeTemplateInput): ThemeTemplate
      themeTemplateUpdate(themeTemplate: ThemeTemplateInput): ThemeTemplate
      themeTemplateDelete(id: Int)
      themeTemplateDuplicate(id: Int): ThemeTemplate
      themeTemplateMakeDefault(id: int): ThemeTemplate
      themeTemplateRestore(id: int): ThemeTemplate
      themeTemplateForceDelete(id: Int)
  }

  ```

  Ở file này chúng ta sẽ định nghĩa các model, query và mutation của module này, định nghĩa ở file này chỉ có tác dụng giúp chúng ta nhìn trực quan module này gồm những gì, từ đấy định nghĩa tương ứng vào code ở 2 files còn lại

- **theme_template_schema.go:** File định nghĩa schema ớ phía code của Go dựa vào file `theme_template.graphql` bên trên.

  ```go
  // theme_template_schema.go

  package graphql

  import (
    "app-api/graph"

    "github.com/graphql-go/graphql"
    "gorm.io/gorm"
  )

  // Article holds article information with graphql object
  var ThemeTemplateGraphQL = graphql.NewObject(graphql.ObjectConfig{
    Name: "ThemeTemplate",
    Fields: graphql.Fields{
      "id": &graphql.Field{
        Type: graphql.Int,
      },
      "themeId": &graphql.Field{
        Type: graphql.Int,
      },
      "themeGlobalStyleId": &graphql.Field{
        Type: graphql.Int,
      },
      "templateId": &graphql.Field{
        Type: graphql.Int,
      },
      "name": &graphql.Field{
        Type: graphql.String,
      },
      "pageType": &graphql.Field{
        Type: graph.PageTypeEnum,
      },
      "default": &graphql.Field{
        Type: graphql.Boolean,
      },
      "createdAt": &graphql.Field{
        Type: graphql.String,
      },
      "updatedAt": &graphql.Field{
        Type: graphql.String,
      },
    },
  })

  var ThemeTemplateResultGraphQL = graph.NewEdgesGraphQL("ThemeTemplate", ThemeTemplateGraphQL)

  // Schema is struct which has method for Query and Mutation. Please init this struct using constructor function.
  type ThemeTemplateSchema struct {
    ThemeTemplateResolver ThemeTemplateResolver
  }

  // Query initializes config schema query for graphql server.
  func (s ThemeTemplateSchema) Query(queries graphql.Fields) {
    queries["themeTemplates"] = &graphql.Field{
      Type:        ThemeTemplateResultGraphQL,
      Description: "Fetch Theme Templates",
      Args: graphql.FieldConfigArgument{
        "themeId": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
        "first": &graphql.ArgumentConfig{
          Type: graphql.Int,
        },
        "after": &graphql.ArgumentConfig{
          Type: graphql.String,
        },
        "pageType": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graph.PageTypeEnum),
        },
        "query": &graphql.ArgumentConfig{
          Type:        graphql.String,
          Description: "Support query syntax same with Shopify, read more <a href='https://shopify.dev/api/usage/search-syntax#search-query-syntax' target='_blank'>here</a> .<br/> For example: query=\"name:\\*product\\*\" will do the query WHERE LOWER(name) LIKE LOWER('%product%')",
        },
      },
      Resolve: s.ThemeTemplateResolver.List,
    }
    queries["themeTemplatesTrash"] = &graphql.Field{
      Type:        ThemeTemplateResultGraphQL,
      Description: "Fetch Theme Templates that is deleted",
      Args: graphql.FieldConfigArgument{
        "themeId": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
        "first": &graphql.ArgumentConfig{
          Type: graphql.Int,
        },
        "after": &graphql.ArgumentConfig{
          Type: graphql.String,
        },
        "pageType": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graph.PageTypeEnum),
        },
        "query": &graphql.ArgumentConfig{
          Type:        graphql.String,
          Description: "Support query syntax same with Shopify, read more: https://shopify.dev/api/usage/search-syntax#search-query-syntax.\n For example: query=\"name:\\*product\\*\" will do the query WHERE LOWER(name) LIKE LOWER('%product%')",
        },
      },
      Resolve: s.ThemeTemplateResolver.ListTrash,
    }
    queries["themeTemplate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Get Theme Template by ID",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.GetByID,
    }
  }

  var inputThemeTemplateCreate = graphql.NewInputObject(graphql.InputObjectConfig{
    Name: "ThemeTemplateInputCreate",
    Fields: graphql.InputObjectConfigFieldMap{
      "themeId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "themeGlobalStyleId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "templateId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "name": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.String),
      },
      "pageType": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graph.PageTypeEnum),
      },
    },
  })

  var inputThemeTemplateUpdate = graphql.NewInputObject(graphql.InputObjectConfig{
    Name: "ThemeTemplateInputUpdate",
    Fields: graphql.InputObjectConfigFieldMap{
      "id": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "name": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.String),
      },
    },
  })

  // Mutation initializes config schema mutation for graphql server.
  func (s ThemeTemplateSchema) Mutation(mutations graphql.Fields) {
    mutations["themeTemplateCreate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Create themeTemplate",
      Args: graphql.FieldConfigArgument{
        "themeTemplate": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(inputThemeTemplateCreate),
        },
      },
      Resolve: s.ThemeTemplateResolver.Create,
    }
    mutations["themeTemplateUpdate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Update themeTemplate",
      Args: graphql.FieldConfigArgument{
        "themeTemplate": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(inputThemeTemplateUpdate),
        },
      },
      Resolve: s.ThemeTemplateResolver.Update,
    }
    mutations["themeTemplateDelete"] = &graphql.Field{
      Type:        graphql.String,
      Description: "Delete themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.Delete,
    }
    mutations["themeTemplateDuplicate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Duplicate themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.Duplicate,
    }
    mutations["themeTemplateMakeDefault"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Make default themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.MakeDefault,
    }
    mutations["themeTemplateRestore"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Restore a themeTemplate that is deleted",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.Restore,
    }
    mutations["themeTemplateForceDelete"] = &graphql.Field{
      Type:        graphql.String,
      Description: "Force delete themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.ForceDelete,
    }
  }

  // NewThemeTemplateSchema initializes Schema struct which takes resolver as the argument.
  func NewThemeTemplateSchema(db *gorm.DB) ThemeTemplateSchema {
    ThemeTemplateResolver := NewThemeTemplateResolver(db)
    return ThemeTemplateSchema{
      ThemeTemplateResolver: ThemeTemplateResolver,
    }
  }

  ```

  Từ file `theme_template.graphql` bên trên chúng ta định nghĩa ra được:

  **Queries:**

  ```go
  // Query initializes config schema query for graphql server.
  func (s ThemeTemplateSchema) Query(queries graphql.Fields) {
    queries["themeTemplates"] = &graphql.Field{
      Type:        ThemeTemplateResultGraphQL,
      Description: "Fetch Theme Templates",
      Args: graphql.FieldConfigArgument{
        "themeId": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
        "first": &graphql.ArgumentConfig{
          Type: graphql.Int,
        },
        "after": &graphql.ArgumentConfig{
          Type: graphql.String,
        },
        "pageType": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graph.PageTypeEnum),
        },
        "query": &graphql.ArgumentConfig{
          Type:        graphql.String,
          Description: "Support query syntax same with Shopify, read more <a href='https://shopify.dev/api/usage/search-syntax#search-query-syntax' target='_blank'>here</a> .<br/> For example: query=\"name:\\*product\\*\" will do the query WHERE LOWER(name) LIKE LOWER('%product%')",
        },
      },
      Resolve: s.ThemeTemplateResolver.List,
    }
    queries["themeTemplatesTrash"] = &graphql.Field{
      Type:        ThemeTemplateResultGraphQL,
      Description: "Fetch Theme Templates that is deleted",
      Args: graphql.FieldConfigArgument{
        "themeId": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
        "first": &graphql.ArgumentConfig{
          Type: graphql.Int,
        },
        "after": &graphql.ArgumentConfig{
          Type: graphql.String,
        },
        "pageType": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graph.PageTypeEnum),
        },
        "query": &graphql.ArgumentConfig{
          Type:        graphql.String,
          Description: "Support query syntax same with Shopify, read more: https://shopify.dev/api/usage/search-syntax#search-query-syntax.\n For example: query=\"name:\\*product\\*\" will do the query WHERE LOWER(name) LIKE LOWER('%product%')",
        },
      },
      Resolve: s.ThemeTemplateResolver.ListTrash,
    }
    queries["themeTemplate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Get Theme Template by ID",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.GetByID,
    }
  }

  ```

  **Mutations:**

  ```go
  // Mutation initializes config schema mutation for graphql server.
  func (s ThemeTemplateSchema) Mutation(mutations graphql.Fields) {
    mutations["themeTemplateCreate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Create themeTemplate",
      Args: graphql.FieldConfigArgument{
        "themeTemplate": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(inputThemeTemplateCreate),
        },
      },
      Resolve: s.ThemeTemplateResolver.Create,
    }
    mutations["themeTemplateUpdate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Update themeTemplate",
      Args: graphql.FieldConfigArgument{
        "themeTemplate": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(inputThemeTemplateUpdate),
        },
      },
      Resolve: s.ThemeTemplateResolver.Update,
    }
    mutations["themeTemplateDelete"] = &graphql.Field{
      Type:        graphql.String,
      Description: "Delete themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.Delete,
    }
    mutations["themeTemplateDuplicate"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Duplicate themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.Duplicate,
    }
    mutations["themeTemplateMakeDefault"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Make default themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.MakeDefault,
    }
    mutations["themeTemplateRestore"] = &graphql.Field{
      Type:        ThemeTemplateGraphQL,
      Description: "Restore a themeTemplate that is deleted",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.Restore,
    }
    mutations["themeTemplateForceDelete"] = &graphql.Field{
      Type:        graphql.String,
      Description: "Force delete themeTemplate",
      Args: graphql.FieldConfigArgument{
        "id": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.Int),
        },
      },
      Resolve: s.ThemeTemplateResolver.ForceDelete,
    }
  }
  ```

  **Model:**

  Sử dụng `graphql.NewObject`

  ```go
  var ThemeTemplateGraphQL = graphql.NewObject(graphql.ObjectConfig{
    Name: "ThemeTemplate",
    Fields: graphql.Fields{
      "id": &graphql.Field{
        Type: graphql.Int,
      },
      "themeId": &graphql.Field{
        Type: graphql.Int,
      },
      "themeGlobalStyleId": &graphql.Field{
        Type: graphql.Int,
      },
      "templateId": &graphql.Field{
        Type: graphql.Int,
      },
      "name": &graphql.Field{
        Type: graphql.String,
      },
      "pageType": &graphql.Field{
        Type: graph.PageTypeEnum,
      },
      "default": &graphql.Field{
        Type: graphql.Boolean,
      },
      "createdAt": &graphql.Field{
        Type: graphql.String,
      },
      "updatedAt": &graphql.Field{
        Type: graphql.String,
      },
    },
  })

  ```

  **Pagination and Edges:**

  Sử dụng hàm [graph.NewEdgesGraphQL](https://github.com/es-hs/app-api/graph/types.go)

  ```go
  var ThemeTemplateResultGraphQL = graph.NewEdgesGraphQL("ThemeTemplate", ThemeTemplateGraphQL)
  ```

  **Input của mutations:**

  Sử dụng `graphql.NewInputObject`

  ```go
  var inputThemeTemplateCreate = graphql.NewInputObject(graphql.InputObjectConfig{
    Name: "ThemeTemplateInputCreate",
    Fields: graphql.InputObjectConfigFieldMap{
      "themeId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "themeGlobalStyleId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "templateId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "name": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.String),
      },
      "pageType": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graph.PageTypeEnum),
      },
    },
  })

  var inputThemeTemplateUpdate = graphql.NewInputObject(graphql.InputObjectConfig{
    Name: "ThemeTemplateInputUpdate",
    Fields: graphql.InputObjectConfigFieldMap{
      "id": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "name": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.String),
      },
    },
  })
  ```

- **theme_template_resolver.go:** File định nghĩa code xử lý của queries và mutations đã định nghĩa bên trên

  Định nghĩa interface gồm các function tương ứng với các queries và mutations đã định nghĩa bên trên

  ```go
  type ThemeTemplateResolver interface {
    List(params graphql.ResolveParams) (interface{}, error)
    ListTrash(params graphql.ResolveParams) (interface{}, error)
    GetByID(params graphql.ResolveParams) (interface{}, error)

    Create(params graphql.ResolveParams) (interface{}, error)
    Update(params graphql.ResolveParams) (interface{}, error)
    Delete(params graphql.ResolveParams) (interface{}, error)
    Duplicate(params graphql.ResolveParams) (interface{}, error)
    MakeDefault(params graphql.ResolveParams) (interface{}, error)
    Restore(params graphql.ResolveParams) (interface{}, error)
    ForceDelete(params graphql.ResolveParams) (interface{}, error)
  }
  ```

  Resolver ở đây sẽ tương ứng với controller trong mô hình MVC, đối với cấu trúc của các project của `es-hs` hiện tại thì resolver ở nằm ở phần delivery trong mô hình sau:

  ![image](https://github.com/bxcodec/go-clean-arch/raw/master/clean-arch.png)

## Register GraphQL của module

Sau đi đã định nghĩa xong cả 3 files thì ở file `server.go` gọi function init graphql của module này như sau:

```go
78. queries := graphql.Fields{}
79. mutations := graphql.Fields{}
80.
81. themeTemplateGraphql := _themeTemplateGraphql.NewThemeTemplateSchema(db)
82. themeTemplateGraphql.Query(queries)
83. themeTemplateGraphql.Mutation(mutations)
84.
85. schema, err := graphql.NewSchema(
86.   graphql.SchemaConfig{
87.     Query: graphql.NewObject(
88.       graphql.ObjectConfig{
89.        Name:   "RootQuery",
90.        Fields: queries,
91.      },
92.    ),
93.    Mutation: graphql.NewObject(
94.      graphql.ObjectConfig{
95.        Name:   "RootMutation",
96.        Fields: mutations,
97.      },
98.    ),
99.    Types: []graphql.Type{
100.      graph.TemplateSectionAreaEnum,
101.      graph.TemplateSectionSaveTypeEnum,
102.      graph.PageTypeEnum,
103.    },
104.  },
105. )
```

>**Line 81:** Init instance của module `theme_template`
>
>**Line 82:** Register queries của module `theme_template`
>
>**Line 83:** Register mutations của module `theme_template`
>
>**Line 85-105:** Khởi tạo GraphQL Schema của toàn bộ project

### Resgiter nhiều modules

Để init schema của nhiều module thì chỉ cần gọi như sau:

```go
queries := graphql.Fields{}
mutations := graphql.Fields{}

db := driver.OpenDB()

//init
authorizations.InitAuthorization()
//
templateSectionGraphql := _templateSectionGraphql.NewTemplateSectionSchema(db)
templateSectionGraphql.Query(queries)
templateSectionGraphql.Mutation(mutations)

templateSectionVersionGraphql := _templateSectionGraphql.NewTemplateSectionVersionSchema(db)
templateSectionVersionGraphql.Query(queries)
templateSectionVersionGraphql.Mutation(mutations)

shopGraphQL := _shopGraphql.NewShopSchema(db)
shopGraphQL.Query(queries)
shopGraphQL.Mutation(mutations)

if os.Getenv("MODE") == "development" {
  todoGraphql := _todoGraphql.NewTodoSchema(db)
  todoGraphql.Query(queries)
  todoGraphql.Mutation(mutations)
}

themeTemplateGraphql := _themeTemplateGraphql.NewThemeTemplateSchema(db)
themeTemplateGraphql.Query(queries)
themeTemplateGraphql.Mutation(mutations)

schema, err := graphql.NewSchema(
  graphql.SchemaConfig{
    Query: graphql.NewObject(
      graphql.ObjectConfig{
        Name:   "RootQuery",
        Fields: queries,
      },
    ),
    Mutation: graphql.NewObject(
      graphql.ObjectConfig{
        Name:   "RootMutation",
        Fields: mutations,
      },
    ),
    Types: []graphql.Type{
      graph.TemplateSectionAreaEnum,
      graph.TemplateSectionSaveTypeEnum,
      graph.PageTypeEnum,
    },
  },
)
```

## Using

- Set argument của query/mutation is required: `graphql.NewNonNull()`

  ```go
  var inputThemeTemplateCreate = graphql.NewInputObject(graphql.InputObjectConfig{
    Name: "ThemeTemplateInputCreate",
    Fields: graphql.InputObjectConfigFieldMap{
      "themeId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "themeGlobalStyleId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "templateId": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "name": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graphql.String),
      },
      "pageType": &graphql.InputObjectFieldConfig{
        Type: graphql.NewNonNull(graph.PageTypeEnum),
      },
    },
  })
  ```

- Set select params của query/mutation is required: `graphql.NewNonNull()`

  ```go
  var ThemeTemplateGraphQL = graphql.NewObject(graphql.ObjectConfig{
    Name: "ThemeTemplate",
    Fields: graphql.Fields{
      "id": &graphql.Field{
        Type: graphql.NewNonNull(graphql.Int),
      },
      "themeId": &graphql.Field{
        Type: graphql.Int,
      },
      "themeGlobalStyleId": &graphql.Field{
        Type: graphql.Int,
      },
      "templateId": &graphql.Field{
        Type: graphql.Int,
      },
      "name": &graphql.Field{
        Type: graphql.String,
      },
      "pageType": &graphql.Field{
        Type: graph.PageTypeEnum,
      },
      "default": &graphql.Field{
        Type: graphql.Boolean,
      },
      "createdAt": &graphql.Field{
        Type: graphql.String,
      },
      "updatedAt": &graphql.Field{
        Type: graphql.String,
      },
    },
  })
  ```

- Declare enum value: `graphql.NewEnum()`

  ```go
  var TemplateSectionAreaEnum = graphql.NewEnum(graphql.EnumConfig{
    Name: "Area",
    Values: graphql.EnumValueConfigMap{
      "HEADER": &graphql.EnumValueConfig{
        Value: "header",
      },
      "MAIN": &graphql.EnumValueConfig{
        Value: "main",
      },
      "FOOTER": &graphql.EnumValueConfig{
        Value: "footer",
      },
    },
  })
  ```

  Then register it in `server.go` in `Types` field

  ```go
  schema, err := graphql.NewSchema(
    graphql.SchemaConfig{
      Query: graphql.NewObject(
        graphql.ObjectConfig{
          Name:   "RootQuery",
          Fields: queries,
        },
      ),
      Mutation: graphql.NewObject(
        graphql.ObjectConfig{
          Name:   "RootMutation",
          Fields: mutations,
        },
      ),
      Types: []graphql.Type{
        graph.TemplateSectionAreaEnum,
        graph.TemplateSectionSaveTypeEnum,
        graph.PageTypeEnum,
      },
    },
  )
  ```

- Query/mutation array of object: `graphql.NewList()`

  ```go
  func (s TodoSchema) Mutation(mutations graphql.Fields) {
    mutations["TodoSave"] = &graphql.Field{
      Type:        graphql.NewList(TodoGraphQL),
      Description: "Create or update todo",
      Args: graphql.FieldConfigArgument{
        "sections": &graphql.ArgumentConfig{
          Type: graphql.NewNonNull(graphql.NewList(inputSectionType)),
        },
      },
      Resolve: s.TodoResolver.Save,
    }
  }
  ```
