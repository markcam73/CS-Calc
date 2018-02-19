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