# API Assignment

This project is a simple CRUD application for managing products. It includes APIs to create, read, update, and delete products.

## Project Structure

```
Api_assignment/
    controllers/
        

productController.js


    models/
        productModel.js
    products.json
    

server.js


    utils/
        responseHandler.js


```

## API Endpoints

### Create a Product

- **URL:** `/products`
- **Method:** `POST`
- **Description:** Creates a new product.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "size": "Large"
  }
  ```
- **Response:**
  - **201:** Product created successfully.
  - **500:** An error occurred.

### Get All Products

- **URL:** `/products`
- **Method:** `GET`
- **Description:** Retrieves all products.
- **Response:**
  - **200:** Products fetched successfully.
  - **500:** An error occurred.

### Get a Product by ID

- **URL:** `/products/{id}`
- **Method:** `GET`
- **Description:** Retrieves a product by its ID.
- **Response:**
  - **200:** Product fetched successfully.
  - **404:** Product not found.
  - **500:** An error occurred.

### Update a Product

- **URL:** `/products/{id}`
- **Method:** `PUT`
- **Description:** Updates a product by its ID.
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "price": 150,
    "size": "Medium"
  }
  ```
- **Response:**
  - **200:** Product updated successfully.
  - **404:** Product not found.
  - **500:** An error occurred.

### Delete a Product

- **URL:** `/products/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a product by its ID.
- **Response:**
  - **200:** Product deleted successfully.
  - **404:** Product not found.
  - **500:** An error occurred.

## Running the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `node server.js`.
4. The server will be running on `http://localhost:3000`.

## License

This project is licensed under the MIT License.
```

This `README.md` file provides an overview of the project structure, API endpoints, and instructions on how to run the project.