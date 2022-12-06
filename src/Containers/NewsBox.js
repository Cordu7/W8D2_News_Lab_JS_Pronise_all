import { useEffect, useState } from "react";
import FilterForm from "../Components/FilterForm";
import NewsList from "../Components/NewsList"


const NewsBox = () => {

    const [storyList, setStoryList] = useState([]);
    const [filter, setFilter] = useState("")
    const[filteredStories, setFilteredStories]= useState([])

    useEffect (() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json" )
        .then(res => res.json())
        .then(data=> {
            const fetchPromises = data.map ((storyId)=>{
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then((res)=> res.json())
            
            });
            const resultsPromise = Promise.all(fetchPromises);
            resultsPromise.then(stories => {
                setStoryList(stories)
                console.log(stories)
            });
        });

    },[]);

    const handleFilterChange = (newFilter)=> {
        setFilter(newFilter);
        setFilteredStories(storyList.filter((item) => {
            return item.title.toLowerCase().includes(newFilter.toLowerCase());
        }))
    };

    return (
        <div>
        <h1>News List</h1>
        <FilterForm filter = {filter} handleFilterChange={handleFilterChange}/>
        <NewsList storyList = {filteredStories}/>
        </div>
    );

};

export default NewsBox