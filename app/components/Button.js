const Button = ({name, icon}) => {
    return (
        <div className="flex">
          <button className="border border-purple p-2 flex items-center space-x-2 text-sm">
            <span>{name}</span>
            <span>{icon}</span>
          </button>
        </div>
      );
};

export default Button;