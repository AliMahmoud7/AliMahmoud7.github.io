# [Books REST APIs](https://restful-api-books.herokuapp.com/books)

## Endpoints available for books

- [GET /books](#get-books-or-get-booksall)
- [POST /books](#post-books)
- [GET /books/{book_id}](#get-booksbook_id)
- [UPDATE /books/{book_id}](#update-booksbook_id)
- [DELETE /books/{book_id}](#delete-booksbook_id)

## HTTP verbs

Verb | Description
-----|-----------
`GET` | Used for retrieving resources.
`POST` | Used for creating resources.
`PUT` | Used for replacing resources.
`DELETE` | Used for deleting resources.


## Test the API
Check the **[API on Heroku](https://restful-api-books.herokuapp.com/books)**

Please download [Postman](https://www.postman.com/downloads/) to test the API quickly and easily.

### `GET` /books or `GET` /books/all
Fetch all the books.

<!-- #### Parameters
No Parameters. -->

### `GET` /books/{book_id}
Fetch a specific book data with book_id (Index).


### `POST` /books
Add a new book.

Send this JSON structure in the request body.

Sample JSON
```json
{
    "book": {
        "name": "book_name",
        "hyperlink": "URL"
    },
    "author": {
        "name": "author_name",
        "hyperlink": "URL"
    },
    "country": {
        "name": "country_name",
        "hyperlink": "URL"
    }
}
```
**You can omit the hyperlink, if there is no hyperlink**

Using Python requests library
```python
data = {
    "book": {
        "name": "Book 1",
    },
    "author": {
        "name": "Ali Mahmoud",
        "hyperlink": "https://alimahmoud7.me"
    },
    "country": {
        "name": "Egypt",
        "hyperlink": "https://en.wikipedia.org/wiki/Egypt"
    }
}

r = requests.post('https://restful-api-books.herokuapp.com/books', json=data)
print(r.json())
```
Response
```
{
    "message": "Book created successfully.",
    "id": 107
}
```

### `UPDATE` /books/{book_id}
Update a specific book data with book_id (Index).

Send the JSON in the request body.

**To remove a hyperlink, Please send `"hyperlink": null` in JSON**

Using Python requests library
```python
data = {
    "book": {
        "name": "Updated Book Name",
        "hyperlink": "https://alimahmoud7.me"
    },
    "author": {
        "name": "alimahmoud7",
        "hyperlink": None
    },
    "country": {
        "name": "EG",
        "hyperlink": "https://en.wikipedia.org/wiki/Egypt"
    }
}

r = requests.post('https://restful-api-books.herokuapp.com/books', json=data)
print(r.json())

```
Response
```
{
    "message": "Book updated successfully.",
    "book": {
        "book": {
            "name": "Updated Book Name",
            "hyperlink": "https://alimahmoud7.me"
        },
        "author": {
            "name": "alimahmoud7",
            "hyperlink": null
        },
        "country": {
            "name": "EG",
            "hyperlink": "https://en.wikipedia.org/wiki/Egypt"
        },
        "id": 107
    }
}
```

### `DELETE` /books/{book_id}
Delete a book with book_id (Index).

Using Python requests library
```python
r = requests.delete('https://restful-api-books.herokuapp.com/books/107')
print(r.json())

```
Response
```
{
    "message": "Book deleted successfully.",
    "id": 107
}
```

### Sample Errors

When book_id (Index) not found.
```
{
    "message": "Book not found."
}
```


When you request an invalid resource.
```
{
    "message": "The resource could not be found."
}
```

When validation errors
```
{
    "message": "Validation error.",
    "errors": {
        "book": {
            "name": [
                "Missing data for required field."
            ]
        },
        "author": {
            "hyperlink": [
                "Not a valid URL."
            ]
        },
        "country": {
            "name": [
                "Shorter than minimum length 2."
            ]
        }
    }
}
```

### `TODO`

- Search books using book_name -> `GET /books?book_name="Book 1"`
- Search books using author_name -> `GET /books?author_name="Ali"`
- Search books using country_name -> `GET /books?country_name="Egypt"`


Thank you.<br>
[Ali Mahmoud](https://alimahmoud7.me/)


