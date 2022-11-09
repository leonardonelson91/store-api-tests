Feature: Products API

  Scenario: Buscar Produtos
    Given I want all the products
    When I send a GET request
    Then all the products must be returned

  Scenario: Buscar produto por ID
    Given I want a product with id 1
    When I send a GET request
    Then the product must be returned

  Scenario: Criar Produto
    Given I want to create a new product
    When I send a POST request
    Then the product must be created
