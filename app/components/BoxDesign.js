export default function BoxDesign({ len, bre, right, top, animation }) {

    return (
        <div className={`items-center absolute border border-r-0 border-grey ${animation}`} 
            style={{width: `${len}px`, height: `${bre}px`, right: `${right}px`, top: `${top}px`}}
        >
        </div>
    );
}