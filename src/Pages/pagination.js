import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample(props) {
  const pages_size=props.page_size;
  let active=props.active_page;
  const t_data=Math.min(props.data['totalResults'],100);
  const T_pages=Math.floor(t_data/pages_size);
  console.log("hello:-",T_pages)
  return (
    <div className="container" style={{height:'100px',minHeight:'100px'}} >
      <div className="container" style={{height:'100px',minHeight:'100px'}} >
      {active<4 && (
        <>
        {T_pages > 4 && (
          <Pagination>
          <Pagination.First onClick={() => {props.page_set(active - 1);active-=1;}} />
          {active==1 ? <Pagination.Item active>{1}</Pagination.Item>: <Pagination.Item onClick={() => {props.page_set(1);active=1;}}>{1}</Pagination.Item> }
          {active==2 ? <Pagination.Item active>{2}</Pagination.Item>: <Pagination.Item onClick={() => {props.page_set(2);active=2;}}>{2}</Pagination.Item> }
          {active==3 ? <Pagination.Item active>{3}</Pagination.Item>: <Pagination.Item onClick={() => {props.page_set(3);active=3;}}>{3}</Pagination.Item> }
          {active==4 ? <Pagination.Item active>{4}</Pagination.Item>: <Pagination.Item onClick={() => {props.page_set(4);active=4;}}>{4}</Pagination.Item> }
          <Pagination.Ellipsis />
          <Pagination.Item onClick={() => {props.page_set(T_pages);active=T_pages;}}>{T_pages}</Pagination.Item>
          <Pagination.Last onClick={() => {
            props.page_set(active + 1);
            active+=1;
          }} />
        </Pagination>
        )}
        {T_pages < 4 && (
          <Pagination>
          <Pagination.First onClick={() => {props.page_set(active - 1);active-=1;}} />
          {Array.from({ length: T_pages }, (_, index) => (
          <>
            {active === index + 1 ? (
              <Pagination.Item active key={index} onClick={() => {props.page_set(index+1);active=index+1;}} >{index + 1} </Pagination.Item>) : (<Pagination.Item key={index} onClick={() => {props.page_set(index+1);active=index+1;}} >{index + 1}</Pagination.Item>)
              }
          </>
          ))}
          <Pagination.Last onClick={() => {props.page_set(active + 1);active+=1;}} /></Pagination>
        )}
        </>
      )}
      {active >= 4 && active >= T_pages - 3 && 
        (
          <>
            <Pagination>
              <Pagination.First
                onClick={() => {
                  if (active > 1) props.page_set(active - 1); // Ensure active stays within bounds
                }}
              />
              {active === 1 ? (
                <Pagination.Item active>{1}</Pagination.Item>
              ) : (
                <Pagination.Item onClick={() => props.page_set(1)}>{1}</Pagination.Item>
              )}
              <Pagination.Ellipsis />
              {[T_pages - 3, T_pages - 2, T_pages - 1, T_pages].map((page) => (
                <Pagination.Item
                  key={page}
                  active={active === page}
                  onClick={() => props.page_set(page)}
                >
                  {page}
                </Pagination.Item>
              ))}
              <Pagination.Last
                onClick={() => {
                  if (active < pages_size) props.page_set(active + 1); // Ensure active stays within bounds
                }}
              />
            </Pagination>
          </>
        )
      }
      {active >= 4 && active < T_pages - 3 && 
        (
          <>
            <Pagination>
              <Pagination.First onClick={() => {props.page_set(active - 1);}}/>
              {active === 1 ? (<Pagination.Item active>{1}</Pagination.Item>) : (<Pagination.Item onClick={() => props.page_set(1)}>{1}</Pagination.Item>)}
              <Pagination.Ellipsis />
              <Pagination.Item active>{active}</Pagination.Item>
              <Pagination.Item onClick={() => props.page_set(active+1)}>{active+1}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item onClick={() => props.page_set(T_pages)}>{T_pages}</Pagination.Item>
              <Pagination.Last onClick={() => {props.page_set(active + 1);}}
              />
            </Pagination>
          </>
        )
    }
    </div>
    </div>
  );
}

export default AdvancedExample;