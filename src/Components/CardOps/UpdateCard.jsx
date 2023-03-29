import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateCardAction } from "../../Redux/slices/CardSlice";

const UpdateCard = ({ id, buckId, title, link, update, setUpdate, setClick }) => {
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
      setClick(false)
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
      <input type="button" value="Update Card" onClick={formik.handleSubmit} className="btn btn-primary" />
    </>
  );
};

export default UpdateCard;
