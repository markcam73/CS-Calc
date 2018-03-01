#standard_dev.py

# need to add:
#    sort
#    interquartile range etc
#    hash

def parse(string):# *realize* CREATES A LIST NOT ARRAY
    dict = ""
    dict = string.split(" ")
    num_array = []
    for key in dict:
        num_array.append(float(key))
    return num_array

def samp_size(sample):
    return len(sample)

def sum(sample):
    sum = 0
    for x in sample:
        sum += x
    return sum

def variance(sample_mean, sample):
    var_list = []
    for x in sample:
        temp = (x - sample_mean)**2
        var_list.append(temp)
    variance = sum(var_list) / len(var_list)
    return variance

def mean(sum, sample):
    sample_len = len(sample)
    mean = sum / sample_len
    return mean

def st_dev(variance):
    stand_dev = variance ** 0.5
    return stand_dev

def merge_sort(nlist):
    str_list = ""
    comma = ", "
    if len(nlist) > 1:
        mid = len(nlist) // 2
        lefthalf = nlist[:mid]
        righthalf = nlist[mid:]
        merge_sort(lefthalf)
        merge_sort(righthalf)
        i = j = k = 0
        while i < len(lefthalf) and j < len(righthalf):
            if lefthalf[i] < righthalf[j]:
                nlist[k] = lefthalf[i]
                i = i + 1
            else:
                nlist[k] = righthalf[j]
                j = j + 1
            k = k + 1
        while i < len(lefthalf):
            nlist[k] = lefthalf[i]
            i = i + 1
            k = k + 1
        while j < len(righthalf):
            nlist[k] = righthalf[j]
            j = j + 1
            k = k + 1
    for n in nlist:
        #need to add checker method, if no decimal return ints
        tempn = str(n)
        str_list += tempn + comma
        #str_list += comma
    return str_list