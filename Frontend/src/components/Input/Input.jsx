function Input({ name, type = "text", placeholder, onChange }) {
    return (
        <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        />
    );
}

export default Input;