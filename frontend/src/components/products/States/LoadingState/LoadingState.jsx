import style from "./LoadingState.module.css"

function LoadingState() {
    const elements = [];
    for (let i = 0; i < 10; i++) {
        const element = 
        <div className={style["product-card"]} key={i}>
            <div className={style["img"]}>
                <div className="loading"></div>
            </div>
            <div className="bottom-group">
                <div className="loading"></div>
                <div className="loading"></div>
            </div>
        </div>;
        elements.push(element);
    }
    return (
        <>{elements}</>
            

    )
}

export default LoadingState