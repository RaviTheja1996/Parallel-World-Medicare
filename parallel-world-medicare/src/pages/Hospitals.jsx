import {
  Container,
  HStack,
  VStack,
  Center,
  SimpleGrid,
  Select,
  Button,
} from "@chakra-ui/react";

import { Card } from "@chakra-ui/react";
import { useEffect, useState, useReducer } from "react";
import { getHospitals } from "../api/apiRequests";
import HospitalCard from "../components/HospitalCard";
import { HospitalReducer, initState } from "../reducers/HospitalReducer";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorMessage from "../components/ErrorMessage";

export default function Hospitals() {
  const [state, dispatch] = useReducer(HospitalReducer, initState);
  const [page, setPage] = useState(1);
  const limit = 6;
  const sortCriteria = "fees";
  const [sortOrder, setSortOrder] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  function fetchUpdateData(page, limit, sortCriteria, sortOrder, filter) {
    dispatch({ type: "LOADING" });
    getHospitals({
      _page: page,
      _limit: limit,
      _sort: sortCriteria,
      _order: sortOrder,
    })
      .then((res) => {
        console.log(res.data);
        setTotalPages(
          Math.ceil(Number(res.headers.get("x-total-count")) / limit)
        );
        dispatch({ type: "SUCCESS", payload: res?.data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }

  useEffect(() => {
    fetchUpdateData(page, limit, sortCriteria, sortOrder);
  }, [page, limit, sortCriteria, sortOrder]);

  const { loading, err, res } = state;

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (err) {
    return <ErrorMessage />;
  }

  return (
    <section id="hospitals" style={{ marginTop: "2rem" }}>
      <Container maxW="90%">
        <VStack spacing="24px" my={4}>
          <Select
            name="sort"
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setPage(1);
            }}
          >
            <option value="">Sort by fees : Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </VStack>
        <Center>
          <HStack id="pagination">
            {new Array(totalPages).fill(0).map((_, i) => {
              return (
                <Button
                  hey={i}
                  onClick={() => {
                    setPage(i + 1);
                  }}
                  colorScheme={page === i + 1 ? "blue" : "gray"}
                >
                  {i + 1}
                </Button>
              );
            })}
          </HStack>
        </Center>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          m="auto"
          marginTop="3rem"
        >
          {res.map((hospital) => {
            return <HospitalCard key={hospital.id} {...hospital} />;
          })}
        </SimpleGrid>
      </Container>
    </section>
  );
}
