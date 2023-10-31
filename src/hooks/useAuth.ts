import { useAppSelector } from "@/redux/store"

const useAuth = () => {
    return useAppSelector(state => state.auth)
}

export default useAuth