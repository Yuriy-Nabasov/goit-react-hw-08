import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const id = useId();
  const nameFilter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.wrapper}>
      <p className={css.label}>Find contacts by name</p>
      <input type="text" id={id} value={nameFilter} onChange={handleChange} />
    </div>
  );
}
