import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Arrow(props) {
    const arrowStyle = {
        position : 'absolute',
        color : 'white',
        fontSize: '3rem',
        cursor: 'Pointer'
    }
    if (props.left) {
        return <ArrowBackIosNewIcon style={arrowStyle} className="bottom-1/2! left-5! hover:text-red-700!" onClick={props.change}/>
    }else if (props.right) {
        return <ArrowForwardIosIcon style={arrowStyle} className="bottom-1/2! right-5! hover:text-red-700!" onClick={props.change}/>
    }
    
  ;
}
