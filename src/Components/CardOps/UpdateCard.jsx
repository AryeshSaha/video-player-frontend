import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateCardAction } from "../../Redux/slices/CardSlice";

const UpdateCard = ({ id, buckId, title, link, update, setUpdate }) => {
  const dispatch = useDispatch();

  // formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: title,
      link: link,
    },

    onSubmit: (values) => {
      dispatch(
        UpdateCardAction({ id, buckId, title: values.title, link: values.link })
      );
      setUpdate(!update)
    },
  });

  return (
    <>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={formik.handleChange("title")}
          value={formik.values.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="link" className="form-label">
          Link
        </label>
        <input
          type="text"
          className="form-control"
          id="link"
          name="link"
          onChange={formik.handleChange("link")}
          value={formik.values.link}
        />
      </div>
      <input type="button" value="Update Card" onClick={formik.handleSubmit} className="btn bg-none text-black outline outline-1 outline-blue-600 hover:bg-blue-600 hover:text-white m-3" />
    </>
  );
};

export default UpdateCard;
