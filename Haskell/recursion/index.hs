{-
    Recursion is actually a way of defining functions in which the 
    function is applied inside its own definition.
-}
maximum' :: (Ord a) => [a] -> a
maximum' [] = error "maximum' of empty list" -- If is empty throw error
maximum' [x] = x -- If have one nubmer return this number
maximum' (x : xs) -- Pattern matching to match the first element and xs the rest of the list
  | x > maxTail = x -- If x is bigger than maxTail return x
  | otherwise = maxTail -- otherwise call maxTail
  where
    -- definition of maxTail
    maxTail = maximum' xs -- maxTail call again the maximum'

replicate' :: (Num i, Ord i) => i -> a -> [a]
replicate' replicateNumber element
  | replicateNumber <= 0 = []
  | otherwise = element : replicate' (replicateNumber - 1) element

take' :: (Num i, Ord i) => i -> [a] -> [a]
take' n _
  | n <= 0 = []
take' _ [] = []
take' n (x : xs) = x : take' (n - 1) xs

reverse' :: [a] -> [a]
reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]

zip' :: [a] -> [b] -> [(a, b)]
zip' _ [] = []
zip' [] _ = []
zip' (a:as) (b:bs) = (a, b):zip' as bs

elem' :: (Eq a) => a -> [a] -> Bool
elem' a [] = False
elem' a (b:bs)
    | a == b = True 
    | otherwise = elem' a bs

quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) = 
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted = quicksort [a | a <- xs, a > x]
    in smallerSorted ++ [x] ++ biggerSorted
