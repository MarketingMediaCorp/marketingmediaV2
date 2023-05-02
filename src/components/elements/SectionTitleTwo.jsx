const SectionTitleTwo = ({title, paragraph, tSpace}) => {
    return ( 
        <div className="section-title d-block text-center">
            <h2 className={`axil-title ${tSpace ?? "m-b-xs-20"}`}>{title}</h2>
            {paragraph ? <p dangerouslySetInnerHTML={{__html:paragraph}}></p> : ""}
        </div>
     );
}
 
export default SectionTitleTwo;