import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactMessage } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (message: ContactMessage) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitMessage(message);
    },
  });
}

export function useGetAllMessages() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMessages();
    },
    enabled: !!actor && !isFetching,
  });
}
