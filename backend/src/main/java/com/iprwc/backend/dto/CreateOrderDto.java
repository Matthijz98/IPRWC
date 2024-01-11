package com.iprwc.backend.dto;

import com.iprwc.backend.model.Address;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateOrderDto {
    public long byUser;
    public List<CreateOrderDetailDto> orderDetails;
    public AddressDto address;
}
