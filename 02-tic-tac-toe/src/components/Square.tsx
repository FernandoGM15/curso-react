/**
 * Interface de props
 */
interface SquareI {
  children: string;
  updateBoard: (index: number) => void;
  index: number;
  isSelected: boolean;
}

export const Square = ({ children, updateBoard, index, isSelected }: SquareI) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    if (updateBoard) {
      updateBoard(index);
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
