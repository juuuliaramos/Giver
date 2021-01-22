import CardSearch from "../../components/CardSearch";
import { useHistory } from "react-router-dom";
import HeaderAll from "../../components/Header";
import { motion } from "framer-motion";
import FooterAll from "../../components/Footer";
import { useEffect } from "react";
import { Container, CardContainer } from "./style";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dataProductsThunk } from "../../store/modules/Products/thunks";

const Feed = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const checkToken = useSelector((state) => state.loginData.token);
  const localToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!localToken) {
      history.push("/");
    }
  }, [localToken]);

  useEffect(() => {
    axios
      .get("https://api-capstone-grupo04.herokuapp.com/products")
      .then((res) => dispatch(dataProductsThunk(res.data)))
      .catch((err) => console.log(err));
  }, []);

  //variavel com array de produtos

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HeaderAll />
      <Container>
        <CardSearch />
        <CardContainer></CardContainer>
      </Container>
      <FooterAll />
    </motion.div>
  );
};

export default Feed;
