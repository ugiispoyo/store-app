export default interface IProduct {
    modal: boolean | false;
    openModal:  React.Dispatch<React.SetStateAction<boolean | false>>;
}