const Button = ({name, icon}) => {
    return (
          <button className=" flex border border-purple p-2 flex items-center space-x-2 text-sm button">
            <span>{name}</span>
            <span>{icon}</span>
          </button>
      );
};

export default Button;