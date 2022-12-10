
export default function Posts(props){
    return  (
        <article>
            <time>{props.time}</time>
            <h2>{props.title}</h2>
            <img src={props.imgLink} alt='image'/>
            <p>{props.text}</p>
            <div><a href="">Continues...</a></div>
        </article>
    )
}