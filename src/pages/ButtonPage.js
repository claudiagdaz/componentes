import { GoBell, GoBook, GoBug, GoBroadcast, GoClockFill, GoComment } from "react-icons/go";
import MyButton from "../components/MyButton";


function ButtonPage() {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <MyButton primary rounded onClick={handleClick}>
                    <GoBell/>
                    Create alert 
                    </MyButton>
            </div>
            <div>
                <MyButton danger outline rounded onMouseEnter={handleClick}>
                    <GoBook/>
                    Book a room
                </MyButton>
            </div>
            <div>
                <MyButton secondary onMouseLeave={handleClick}>
                    <GoBroadcast/>
                    Check network status
                </MyButton>
            </div>
            <div>
                <MyButton warning>
                    <GoBug/>
                    Report a bug
                </MyButton>
            </div>
            <div>
                <MyButton success outline rounded>
                    <GoClockFill/>
                    Set a reminder
                </MyButton>
            </div>
            <div>
                <MyButton plain outline>
                    <GoComment/>
                    Leave a comment
                </MyButton>
            </div>
        </div>
    )
}

export default ButtonPage;