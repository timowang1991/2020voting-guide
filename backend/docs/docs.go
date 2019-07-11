// GENERATED BY THE COMMAND ABOVE; DO NOT EDIT
// This file was generated by swaggo/swag at
// 2019-07-07 19:14:05.637311563 +0800 CST m=+0.879081954

package docs

import (
	"bytes"

	"github.com/alecthomas/template"
	"github.com/swaggo/swag"
)

var doc = `{
    "swagger": "2.0",
    "info": {
        "description": "2020 Voting Guide Backend",
        "title": "2020 Voting Guide",
        "contact": {},
        "license": {},
        "version": "0.0.1"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/candidate/{id}": {
            "get": {
                "description": "get the candidate by id",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "summary": "get the candidate by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "ID",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "object",
                            "$ref": "#/definitions/main.Candidate"
                        }
                    }
                }
            }
        },
        "/candidate/{id}/record": {
            "get": {
                "description": "get records of candidate by id",
                "consumes": [
                    "application/json"
                ],
                "summary": "get records of candidate by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "ID",
                        "name": "id",
                        "in": "path"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "record",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/candidates/constituency/{constituency}": {
            "get": {
                "description": "list candidates by constituency",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "summary": "List candidates by constituency",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Constituency",
                        "name": "constituency",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "object",
                            "$ref": "#/definitions/main.CandidateCards"
                        }
                    }
                }
            }
        },
        "/version": {
            "get": {
                "summary": "2020 Voting Guide Service Version",
                "responses": {
                    "200": {
                        "description": "X.X.X",
                        "schema": {
                            "type": "string"
                        }
                    },
                    "500": {
                        "description": "fail"
                    }
                }
            }
        }
    },
    "definitions": {
        "main.Candidate": {
            "type": "object",
            "properties": {
                "age": {
                    "type": "integer"
                },
                "bornIn": {
                    "type": "string"
                },
                "county": {
                    "type": "object",
                    "$ref": "#/definitions/main.PartyCard"
                },
                "educationalBackground": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "experiences": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "photo": {
                    "type": "string"
                },
                "politics": {
                    "type": "string"
                }
            }
        },
        "main.CandidateCard": {
            "type": "object",
            "properties": {
                "county": {
                    "type": "object",
                    "$ref": "#/definitions/main.PartyCard"
                },
                "experience": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "photo": {
                    "type": "string"
                }
            }
        },
        "main.CandidateCards": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "county": {
                        "type": "object",
                        "$ref": "#/definitions/main.PartyCard"
                    },
                    "experience": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "photo": {
                        "type": "string"
                    }
                }
            }
        },
        "main.PartyCard": {
            "type": "object",
            "properties": {
                "emblem": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                }
            }
        }
    }
}`

type swaggerInfo struct {
	Version     string
	Host        string
	BasePath    string
	Title       string
	Description string
}

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo swaggerInfo

type s struct{}

func (s *s) ReadDoc() string {
	t, err := template.New("swagger_info").Parse(doc)
	if err != nil {
		return doc
	}

	var tpl bytes.Buffer
	if err := t.Execute(&tpl, SwaggerInfo); err != nil {
		return doc
	}

	return tpl.String()
}

func init() {
	swag.Register(swag.Name, &s{})
}