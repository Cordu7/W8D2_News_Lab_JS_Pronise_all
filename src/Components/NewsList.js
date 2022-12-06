
const NewsList = ({storyList})=>{

    if (storyList.length === 0) {
        return <p>No news found</p>
    }

    storyList.sort((a, b) => {
        return b.score - a.score;
    })

    const storyItems = storyList.map((story, index)=>{
        return <li key = {index}>
            <div>{story.score} {story.title} {new Date(story.time*1000).toISOString()}</div>
            { story.text
                ? <details>
                        <summary>Click for text...</summary>
                        {story.text}
                    </details>
                : ""
            }
        </li>

    });

    return (
    <div>
    <ul>{storyItems}</ul>
    </div>)
};

export default NewsList