import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = ({
  loading,
  searchInput,
  handleSearchChange,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control
            type="text"
            className="mr-sm-2"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </Col>
        {loading ? (
          <Button disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Searching..
          </Button>
        ) : (
          <Button variant="outline-light" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        )}
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
