import { getDeepCopy } from "../../utils/helpers";
import { Input } from "../Input";
import { TableContainer, Td } from "./style";
import PropTypes from "prop-types";

export const Table = ({ sudokuArr, setSudokuArr, initialArr }) => {
  const onInputChange = (e, row, col) => {
    let value = parseInt(e.target.value) || -1,
      newGrid = getDeepCopy(sudokuArr);

    if (value === -1 || (value >= 1 && value <= 9)) {
      newGrid[row][col] = value;
      setSudokuArr(newGrid);
    }
  };
  return (
    <TableContainer>
      <tbody>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
          return (
            <tr
              key={rIndex}
              className={(row + 1) % 3 === 0 ? "borderBottom" : ""}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                return (
                  <Td
                    key={rIndex + cIndex}
                    className={(col + 1) % 3 === 0 ? "borderRight" : ""}
                  >
                    <Input
                      onChange={(e) => onInputChange(e, row, col)}
                      value={
                        sudokuArr[row][col] === -1 ? "" : sudokuArr[row][col]
                      }
                      disabled={initialArr[row][col] !== -1}
                    />
                  </Td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

Table.propTypes = {
  sudokuArr: PropTypes.array,
  setSudokuArr: PropTypes.func,
  initialArr: PropTypes.array,
};
