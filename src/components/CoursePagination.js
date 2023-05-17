import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CoursePagination() {
  return (
            <div className="mt-5">
              <Stack spacing={2} alignItems="center">
                <Pagination
                  count={3}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                      {...item}
                      color="primary"
                    />
                  )}
                />
              </Stack>
            </div>  
  );
}

export default CoursePagination;