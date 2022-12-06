
const FilterForm= ({filter, handleFilterChange})=>{

    const handleInputChange = ((event)=>{
        handleFilterChange(event.target.value)
    });

    return(
        <form>
        <label htmlFor="search">Enter search</label>
        <input id="search" type="text" value= {filter} onChange= {handleInputChange}></input>
        </form>
    );
     
};

export default FilterForm