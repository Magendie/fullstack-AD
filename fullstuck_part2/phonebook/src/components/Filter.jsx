const Filter = (props) => {
  return (
    <div>
      <div>
        filter shown with{" "}
        <input type="text" id="searchRequest" onInput={props.numbersToShow} />
      </div>
      <div>
        {props.showFilter.map((filtered) => (
          <div key={filtered.id}>
            <p>
              {filtered.name} {filtered.number}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
