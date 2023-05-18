export function useQuery(useLocation) {
    return new URLSearchParams(useLocation.search);
}
