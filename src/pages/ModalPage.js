import { useState } from "react";
import Modal from "../components/Modal";
import MyButton from "../components/MyButton";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    ;}

    const actionBar = <div>
        <MyButton onClick={handleClose} primary>I accept</MyButton>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
        </Modal>

    return(
        <div className="relative">
            <MyButton onClick={handleClick} primary> Open Modal</MyButton> 
            {showModal && modal}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dolor tincidunt lorem venenatis dapibus. Donec facilisis vel ipsum quis dapibus. Nulla ac viverra lorem. Etiam ac scelerisque urna. Quisque tincidunt justo massa, eget sollicitudin felis sagittis et. Sed gravida porttitor metus, eget convallis velit ultricies ac. Sed pellentesque malesuada ipsum, sit amet fringilla enim lacinia sed. Pellentesque eget placerat lacus.</p>
        </div>
    )
}

export default ModalPage;