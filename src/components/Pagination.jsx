import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = () => {
  return (
    <div className="container p-5 d-flex justify-content-end">
      <div className="row">
        <div className="col-md-12">
          <div className="p-3">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomPagination;
