
import * as helper from "./logic"
import "../../styles/CustomText.css"
const Text = ({ children, as }) => (helper.getTextType(as, children))

export default Text;
