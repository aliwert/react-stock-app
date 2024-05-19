import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getStockSuccess,
  getProPurBraFirmSuccess,
} from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getStock = async (path = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;
      dispatch(getStockSuccess({ stockData, path }));
    } catch (error) {
      toastErrorNotify(`${path} Data could not be retrieved.`);
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`/${path}/${id}`);
      toastSuccessNotify(`${path} Successfully deleted.`);
      getStock(path);
    } catch (error) {
      toastErrorNotify(`${path} Deletion unsuccessful.`);
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${path}/`, info);
      getStock(path);
      toastSuccessNotify(`${path} Successfully added.`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} Addition unsuccessful.`);
      console.log(error);
    }
  };

  const putStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`/${path}/${info._id}`, info);
      getStock(path);
      toastSuccessNotify(`${path} Successfully updated.`);
    } catch (error) {
      toastErrorNotify(`${path} Update unsuccessful.`);
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getProPurBraFirmStock = async () => {
    dispatch(fetchStart());
    try {
      const [pro, pur, bra, fir] = await Promise.all([
        axiosToken("/products"),
        axiosToken("/purchases"),
        axiosToken("/brands"),
        axiosToken("/firms"),
      ]);
      const products = pro?.data?.data;
      const purchases = pur?.data?.data;
      const brands = bra?.data?.data;
      const firms = fir?.data?.data;

      dispatch(getProPurBraFirmSuccess({ products, purchases, brands, firms }));
    } catch (error) {
      console.log(error);
    }
  };

  return { getStock, deleteStock, postStock, putStock, getProPurBraFirmStock };
};

export default useStockRequest;
