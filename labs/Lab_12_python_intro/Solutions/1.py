N, M, z, x = int(input("Введите N ")), int(input("Введите M ")), [(0, 0)], 0
end_pos = (int(N) - 1, int(M) - 1)
for cur_pos in z:
    if cur_pos == end_pos: x += 1
    else:
        for move in [(2, 1), (1, 2)]:
            next_pos = (cur_pos[0] + move[0], cur_pos[1] + move[1])
            if (0, 0) <= next_pos and next_pos <= end_pos: z.append(next_pos)
print(x)