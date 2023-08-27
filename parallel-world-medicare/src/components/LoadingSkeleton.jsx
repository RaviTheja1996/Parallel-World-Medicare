import { Stack, Skeleton } from "@chakra-ui/react";

function LoadingSkeleton() {
  return (
    <Stack>
      <Skeleton height="2.5rem"></Skeleton>
      <Skeleton height="2.5rem"></Skeleton>
      <Skeleton height="2.5rem"></Skeleton>
      <Skeleton height="2.5rem"></Skeleton>
      <Skeleton height="2.5rem"></Skeleton>
      <Skeleton height="2.5rem"></Skeleton>
      <Skeleton height="2.5rem"></Skeleton>
    </Stack>
  );
}

export default LoadingSkeleton;
