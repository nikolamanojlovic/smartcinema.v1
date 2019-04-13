package com.nmanojlovic.smartcinema.populators;

import java.util.List;

public interface ISuperPopulator<T, K> {

    K populate(T model);

    List<K> populateList(List<T> models);
}
