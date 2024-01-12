package com.iprwc.backend.dto;

import com.iprwc.backend.model.Address;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class CreateOrderDto {
    public Long byUser;
    public List<CreateOrderDetailDto> orderDetails;
    public Long addressId;
}
