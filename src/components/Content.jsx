const Content  = (props) => 
    {
    //creating arr
    const number = [1,2,3,4,5];
    //creating map function
    const squared = number.map((num) => num * num);
    //creating array of objects
    
    return (
        <div>
            <h2>Article</h2>
            <ul>
                {
                    props.articles.map((article, index) => (
                    <li key = {index}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                    </li>
            ))}
            </ul>
    
            <h2>Squaring Numbers</h2>
            <ul>
               
                {number.map((num, index) => (
                <li key = {index}>
                    {num}*{num}={squared[index]}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Content